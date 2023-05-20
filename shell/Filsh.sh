#!/bin/bash

# Cloudflare API相关信息
cf_api_token="d9b22bc85b5a85d88fa6b6827633dc0be20cd"
cf_zone_id="3dac045aa490dc278ccf35ee0cc6f43e"
cf_dns_record_id="a683f22665c85680c13320553f8d6522"
domain="home.reami.top"
email="mjc.88@126.com"


log_file="ddns.log"
log_date=$(date "+%Y-%m-%d %H:%M:%S")
echo "******* " >> "$log_file"
echo "*******"  >> "$log_file"
echo "$log_date: Starting DDNS update..." >> "$log_file"
echo "$log_date: Current IPv6: $current_ipv6" >> "$log_file"


current_ipv6=$(curl http://ipv6.whatismyip.akamai.com)
echo $current_ipv6 >> ddns.log
curl --request PUT "https://api.cloudflare.com/client/v4/zones/$cf_zone_id/dns_records/$cf_dns_record_id" \
  --header 'Content-Type: application/json' \
  --header 'X-Auth-Email: mjc.88@126.com' \
  --header 'X-Auth-Key: d9b22bc85b5a85d88fa6b6827633dc0be20cd' \
  --data '{"type":"AAAA","name":"'"$domain"'","content":"'"$current_ipv6"'","ttl":3600,"proxied":false}'  >> "$log_file" 2>&1

echo "$log_date: DDNS update completed." >> "$log_file"
return 0
