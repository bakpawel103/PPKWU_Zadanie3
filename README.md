# PPKWU_Zadanie3

It's a Nodejs REST Api project that will get year, month and language and will response generated ".ics" file with added events from weeia site and that can be open easly at mobile devices.

## Starting server tutorial:

To start server, just go to project directory with terminal and enter command:  
> node run dev

## Endpoints:

`GET /getIcs` <- get ".ics" file on provided at body date
@body (:number, :number, :number)  
@return ".ics" file with saved events

**Example body:**  
```javascript
{
    "rok": 2020,
    "miesiac": 10,
    "lang": 1
}
```

**Example result:**  
> "2020_10_1.ics" file
