Denne fil vil indeholde:

1. Forklaring på hvordan man kører vores program på localhost
2. Videogennemgang af programmet (både som link og fil)
3. Api key
4. Andet Information

1:

- Åben filen i VS code
- Kør eventuelt "npm install"
- Åben server.js filens integreret Terminal - ved højreklik, eller naviger' til stien via Terminal kommandoer.
- Kør serveren med "node server.js"
- Åben http://localhost:3000 i browseren

OBS! Hver gang der bliver trykket på en knap, hvor man bliver redirected til en anden side, så bliver man sendt til domænet som kører på Digital Ocean.
Så skal man derfor selv ændre tilbage til localhost.
Eksempel: Der bliver trykket på logind knappen, så bliver man sendt fra localhost:3000 til https://joejuiceforum.xyz/post. Herfra skal man så ændre url'et til localhost:3000/post

Sjældne men kendte fejl:

- Mangel på moduler -> kør "npm install" i flere mapper/stier
- Sqliite modulerne mangler - > npm install sqlite3
- Dette kan også ske selvom man kan se modulet i sine node_modules mappe
- Bcrypt fejl -> npm install bcrypt

Det kan også være fordelsagtigt at slette modulerne helt og derefter geninstallere dem igen.

2:
Link til video: https://www.loom.com/share/51c66ff583014964b5ff30225a1a8fa9?sid=1ef948bb-57a4-4443-8a4b-1185804961ef
Hvis mod forventning at linket ikke måtte virke, kan videoen findes som .mov fil i zip-filen.
Videoen ligger også under bilag i rapporten.
(Og beklager for den følsomme mikrofon)

3:
Api Key
Twilio key:
accountSid = 'AC6246404e891b0ec4315f48f8b1f5722f'; Kan findes i filen -> user.js , linje 136
authToken = 'e62028a0e62245d4b570e4b62a6c1aff'; Kan findes i filen -> user.js , linje 137


4:
Dele af css og html filerne af udarbejdet på baggrund af øvelsestimernes tilgang til udsmykning og design af programmet.
IP adresse til ssh root@206.189.109.70 kode: 7777
