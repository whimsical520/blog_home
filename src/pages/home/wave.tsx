import React, { useCallback, useEffect, useRef } from 'react'

export const Wave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const drawWava = useCallback(() => {
    // 获取canvas容器
    const canvas = canvasRef.current

    if (!canvas) return

    // 获得画笔
    const ctx = canvas.getContext('2d')
    //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout
    const requestAnimationFrame = window.requestAnimationFrame
    // 波浪大小
    const boHeight = canvas.height / 2
    const posHeight = canvas.height / 1.2
    // 初始化角度为0
    let step = 0
    // 定义三条不同波浪的颜色
    const lines = ['rgba(255, 255, 255, .8)', 'rgba(255, 255, 255, .6)', 'rgba(255, 255, 255, .4)']

    function loop() {
      if (!canvas || !ctx) return

      // 清楚canvas内容
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      step++
      // 画3个不同颜色的矩形
      for (let j = lines.length - 1; j >= 0; j--) {
        ctx.fillStyle = lines[j]
        // 每个矩形的角度都不同，每个之间相差45度
        const angle = ((step + j * 50) * Math.PI) / 180
        const deltaHeight = Math.sin(angle) * boHeight
        const deltaHeightRight = Math.cos(angle) * boHeight

        ctx.beginPath()
        ctx.moveTo(0, posHeight + deltaHeight)
        ctx.bezierCurveTo(
          canvas.width / 2,
          posHeight + deltaHeight - boHeight,
          canvas.width / 2,
          posHeight + deltaHeightRight - boHeight,
          canvas.width,
          posHeight + deltaHeightRight
        )
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.lineTo(0, posHeight + deltaHeight)
        ctx.closePath()
        ctx.fill()
      }

      requestAnimationFrame(loop)
    }

    loop()
  }, [])

  useEffect(() => {
    drawWava()
  }, [drawWava])

  return <canvas className='canvasWave' ref={canvasRef} />
}
