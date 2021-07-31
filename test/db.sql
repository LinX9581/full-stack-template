SET timestamp=1599450000;
SELECT SQL_CALC_FOUND_ROWS  wp_posts.ID FROM wp_posts  LEFT JOIN wp_term_relationships ON (wp_posts.ID = wp_term_relationships.object_id) WHERE 1=1  AND ( 
  wp_term_relationships.term_taxonomy_id IN (3,4,5,6,8,9,108,154,1645,1649,1651,1826,1837,1870,2070,6761,7208,10254)
) AND wp_posts.post_type = 'post' AND ((wp_posts.post_status = 'publish')) GROUP BY wp_posts.ID ORDER BY wp_posts.post_date DESC LIMIT 0, 5;
# User@Host: ap_chinapost[ap_chinapost] @  [172.20.11.14]
# Thread_id: 477256  Schema: chinapost  QC_hit: No
# Query_time: 18.824114  Lock_time: 0.000099  Rows_sent: 4  Rows_examined: 1534326
# Rows_affected: 0  Bytes_sent: 126
SET timestamp=1599450000;
SELECT SQL_CALC_FOUND_ROWS  wp_posts.ID FROM wp_posts  LEFT JOIN wp_term_relationships ON (wp_posts.ID = wp_term_relationships.object_id) WHERE 1=1  AND ( 
  wp_term_relationships.term_taxonomy_id IN (3,4,5,6,8,9,108,154,1645,1649,1651,1826,1837,1870,2070,6761,7208,10254)
) AND wp_posts.post_type = 'post' AND ((wp_posts.post_status = 'publish')) GROUP BY wp_posts.ID ORDER BY wp_posts.post_date DESC LIMIT 0, 4;
# User@Host: ap_chinapost[ap_chinapost] @  [172.20.11.7]
# Thread_id: 477282  Schema: chinapost  QC_hit: No
# Query_time: 20.081373  Lock_time: 0.000076  Rows_sent: 4  Rows_examined: 1534326
# Rows_affected: 0  Bytes_sent: 126
SET timestamp=1599450000;
SELECT SQL_CALC_FOUND_ROWS  wp_posts.ID FROM wp_posts  LEFT JOIN wp_term_relationships ON (wp_posts.ID = wp_term_relationships.object_id) WHERE 1=1  AND ( 
  wp_term_relationships.term_taxonomy_id IN (3,4,5,6,8,9,108,154,1645,1649,1651,1826,1837,1870,2070,6761,7208,10254)
) AND wp_posts.post_type = 'post' AND ((wp_posts.post_status = 'publish')) GROUP BY wp_posts.ID ORDER BY wp_posts.post_date DESC LIMIT 0, 4;
# User@Host: ap_chinapost[ap_chinapost] @  [172.20.11.14]
# Thread_id: 477030  Schema: chinapost  QC_hit: No
# Query_time: 18.867233  Lock_time: 0.000098  Rows_sent: 4  Rows_examined: 1534326
# Rows_affected: 0  Bytes_sent: 126
SET timestamp=1599450000;
SELECT SQL_CALC_FOUND_ROWS  wp_posts.ID FROM wp_posts  LEFT JOIN wp_term_relationships ON (wp_posts.ID = wp_term_relationships.object_id) WHERE 1=1  AND ( 
  wp_term_relationships.term_taxonomy_id IN (3,4,5,6,8,9,108,154,1645,1649,1651,1826,1837,1870,2070,6761,7208,10254)