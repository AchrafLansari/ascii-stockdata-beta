# Display Ascii Line Chart

Show historical stock data as a basic ASCII line chart for a given stock symbol inside a date range

**URL** : `/ascii?symbol={symbol}&since={since}&until={until}&price={price}`

**URL Parameters** :

- `symbol=[String]` where symbol is the stock symbol to generate the line chart for (eg APPL for Apple, MSFT for Microsoft etc).

- `since=[String]` where since is the start date in YYYY-MM-DD format (inclusive).
- `until=[String]` where until is the end date in YYYY-MM-DD format (inclusive).
- `price=[String]` is optional and can be `open`, `high`, `low` or `close` (default).

**Method** : `GET`

**Auth required** : NO

## Success Response

**Condition** : If parameters are correct

**Code** : `200 OK`

**Content example**

**First four weeks of Uber's IPO**

```bash
curl -d symbol=UBER \
-d since="2019-05-10" -d until="2019-06-07" \
-G http://localhost:8000/ascii
```

```
                                  + +
                                      +
        +
                                +
+     +   + + + +   +         +
                  +   +     +
    +                   + +


  +
```

## Error Responses

**Condition** : If query parameters are not provided or incorrect.

**Code** : `400 Bad Resuest`

**Content** : `Bad Request : Missing or Incorrect Parameters,Please Read The Api Documentation`
