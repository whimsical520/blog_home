DIRNAME=$(cd "$(dirname "$0")"; pwd)
ROOT=$(dirname "$DIRNAME")

# 启动 pm2
echo '启动 pm2'
serverEntry="$ROOT/.next/server/webpack-runtime.js"
echo "启动文件路径为: $serverEntry"

if [ ! -d "$serverEntry" ]; then
  pm2 start $ROOT/aquaman/conf/pm2.config.js --no-daemon
fi
echo 'done'
