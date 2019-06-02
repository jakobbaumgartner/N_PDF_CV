# N_PDF_CV 

Program na podlagi vnešenih podatkov izdela življenepis (CV), ki nam ga nato v pdf obliki vrne nazaj. 

1.frontend obrazec, vnesemo podatke
2.preko POST requesta pošljemo strežniku
3.'express-formidable' modul nam parsa datoteke in podatke
4.nato podatke damo v pdfkit, ki generira datoteko
5.posebna funkcija savetopdf, ki sem jo naredil "sam" poskrbi, da vidimo kdaj je pdf ustvarjen iz konca stream -a podatkov
6.preko sendFile vrnemo datoteko, uporabniku se odpre v brskalniku

Projekt sicer ni zelo zapleten, vendar pa se je pojavil zanimiv problem. Modul pdfkit namreč ne vrne promise in ne vzame callback funkcije. Dejansko nam ne pove kdaj je končal z izdelavo pdfa. Kdaj je konec lahko vidimo iz streama podatkov, ki ga uporablja "fs". Ko se ta konča je datoteka izoblikovana in lahko jo vrnemo. To sem našel na github:  https://github.com/foliojs/pdfkit/issues/265 . Eden od uporabnikov je šel celo korak dlje in upošteva še kdaj se pdfkit zaključi (ta se običajno predno se zaključi sam stream), kdaj se zaključi stream in vrne promise. Funkcija je sicer v TypeScript. 

Cilj projekta ni narediti production - ready aplikacije, varnost torej ni na prvem mestu, isto ne efekivnost shranjevanja podatkov. (Podatki se ne shranijo.) Možnosti za izboljšavo je veliko, od izgleda pa do error handling in preverjanja vnešenih podatkov. 

Naučil sem se nekaj novega o promises in pa nekaj več o branju dokumentacije. 


## Uporabljeno

* nodejs,
	* path,
	* fs,
* express,
* pdfkit,
* express-formidable.

