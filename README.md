1st Step:

Run command in bash terminal:
```
curl 'https://app.sentio.xyz/api/v1/eventlogs/pendle/user-activities' \
  -H 'api-key: <API KEY>' \
  --compressed \
  --data-raw '{"projectOwner":"pendle","projectSlug":"user-activities","projectId":"oWaSDkaN","query":"","sorts":[{"field":"attributes.time","desc":false}],"limit":100000,"timeRange":{"start":{"relativeTime":{"unit":"days","value":-365}},"end":{"relativeTime":{"unit":"seconds","value":0}}},"version":12}' > input.json
```


2nd Step: Run `node main.js`
# sentio-csv-writer
