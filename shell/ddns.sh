#!/bin/bash

# Cloudflare API配置
cf_api_token="d9b22bc85b5a85d88fa6b6827633dc0be20cd"
cf_zone_id="3dac045aa490dc278ccf35ee0cc6f43e"
cf_dns_record_id="a683f22665c85680c13320553f8d6522"
domain="home.reami.top"
email="mjc.88@126.com"

# 获取当前IPv6地址
#current_ipv6=$(curl http://ipv6.whatismyip.akamai.com)
current_ipv6=$(ip -6 addr show dev br-lan | awk '/inet6 .* scope global/ {split($2, a, "/"); if (substr(a[1], 1, 5) == "2409:") print a[1]}')

# 日志文件设置
log_file="ddns.log"
log_date=$(date "+%Y-%m-%d %H:%M:%S")

# 输出到日志文件
write_log 7 "$log_date: Starting DDNS update..."

# 输出当前IPv6到日志文件
write_log 7  "$log_date: Current IPv6: $current_ipv6"

# 发起API请求更新DNS记录
run=$(curl --request PUT "https://api.cloudflare.com/client/v4/zones/$cf_zone_id/dns_records/$cf_dns_record_id" \
        --header 'Content-Type: application/json' \
        --header 'X-Auth-Email: mjc.88@126.com' \
        --header 'X-Auth-Key: d9b22bc85b5a85d88fa6b6827633dc0be20cd' \
        --data '{"type":"AAAA","name":"'"$domain"'","content":"'"$current_ipv6"'","ttl":3600,"proxied":false}')
echo $run
write_log 7   "$log_date: Cloudflare return: ==== $run"
write_log 7   "$log_date: DDNS update completed."
