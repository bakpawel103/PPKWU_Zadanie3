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
> "2020_10.ics" file:
```javascript
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
PRODID:adamgibbons/ics
METHOD:PUBLISH
X-PUBLISHED-TTL:PT1H
BEGIN:VEVENT
UID:8c5afa10-24bd-48f0-81fe-6ea601bf8520
SUMMARY:First Step to Fields Medal
DTSTAMP:20201124T145200Z
DTSTART;VALUE=DATE:20200309
END:VEVENT
BEGIN:VEVENT
UID:d6351b09-05fb-4db2-a4f0-f76c864e8880
SUMMARY:Finał konkursu InfoSukces
DTSTAMP:20201124T145200Z
DTSTART;VALUE=DATE:20200313
END:VEVENT
BEGIN:VEVENT
UID:b8e252a3-dba8-433b-b039-9d6c2d9dcc14
SUMMARY:Matura próbna Matematyka podstawowa
DTSTAMP:20201124T145200Z
DTSTART;VALUE=DATE:20200316
END:VEVENT
BEGIN:VEVENT
UID:11eabae8-c81c-44a2-ab36-43047223fe74
SUMMARY:Matura próbna Matematyka rozszerzona
DTSTAMP:20201124T145200Z
DTSTART;VALUE=DATE:20200317
END:VEVENT
BEGIN:VEVENT
UID:cec139e2-c132-4c00-bbff-cf954fae4075
SUMMARY:Matura próbna Fizyka rozszerzona
DTSTAMP:20201124T145200Z
DTSTART;VALUE=DATE:20200318
END:VEVENT
BEGIN:VEVENT
UID:828b2518-7de1-4eb1-8fd4-5e354f17a7cc
SUMMARY:Matura próbna Chemia rozszerzona
DTSTAMP:20201124T145200Z
DTSTART;VALUE=DATE:20200319
END:VEVENT
BEGIN:VEVENT
UID:32727bd3-97e0-4fca-9f1c-da36a96ea329
SUMMARY:Finał konkursu Fascynująca Fizyka - poziom podstawowy
DTSTAMP:20201124T145200Z
DTSTART;VALUE=DATE:20200323
END:VEVENT
BEGIN:VEVENT
UID:408966b6-59c7-496c-8013-7cd26c49f204
SUMMARY:Finał konkursu Fascynująca Fizyka - poziom ponadpodstawowy
DTSTAMP:20201124T145200Z
DTSTART;VALUE=DATE:20200325
END:VEVENT
BEGIN:VEVENT
UID:b97f1a82-19d7-4468-a371-d586e453af39
SUMMARY:Finał konkursu Piękne doświadczenie\, Fascynujące Wyjaśnienie
DTSTAMP:20201124T145200Z
DTSTART;VALUE=DATE:20200327
END:VEVENT
END:VCALENDAR

```
