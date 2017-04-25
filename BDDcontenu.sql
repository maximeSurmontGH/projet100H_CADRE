DELETE FROM demandesattestation;
DELETE FROM attestations;
DELETE FROM demandesconge;
DELETE FROM conges;
DELETE FROM demandesvalidite;
DELETE FROM validites;
DELETE FROM demandesvehicule;
DELETE FROM vehicules;
DELETE FROM rappels;
DELETE FROM employes;
DELETE FROM contact;
DELETE FROM devis;
DELETE FROM elementssite;
DELETE FROM ressources;
DELETE FROM evenementsautres;


INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('chloe.pelletier','PELLETIER', 'chloe', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','stagiaire','0614348499','chloe.pelletier@hei.com');
INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('maxime.surmont','SURMONT', 'maxime', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','ingénieur informatique','0640400478','maxime.surmont@hei.com');
INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('jean.dupond','DUPOND', 'jean', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','métallurgiste','0640400478','jean.dupond@hei.com');
INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('jaques.lafaye','LAFAYE', 'jaques', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','livreur','0649304817','jaques.lafaye@hei.com');
INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('jeanne.durand','DURAND', 'jeanne', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','métallurgiste','0649264027','jeanne.durand@hei.com');
INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('youssef.abdallah','ABDALLAH', 'youssef', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','livreur','0600182735','youssef.abdallah@hei.com');
INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('kevin.tran','TRAN', 'kevin', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','métallurgiste','0627319383','kevin.tran@hei.com');
INSERT INTO `employes`(`idEmploye`,`nomEmploye`,`prenomEmploye`,`motDePasse`,`poste`,`telephone`,`email`) VALUES ('thierry.pelletier','PELLETIER', 'thierry', '93292b27203e307bb1a6076042356e366517612a0f699b68:dc1ff13dc770dc5e2b176dff75a76dfce3c9744b3941138a','CEO','0648489200','thierry.pelletier@hei.com');

INSERT INTO `attestations`(`idAttestation`,`typeAttestation`) VALUES (1,'');
INSERT INTO `demandesattestation`(`id`,`attestations_idAttestation`,`employes_idEmploye`,`etat`,`date`) VALUES (1,,'chloe.pelletier','valide','05042017');
INSERT INTO `demandesattestation`(`id`,`attestations_idAttestation`,`employes_idEmploye`,`etat`,`date`) VALUES (2,,'chloe.pelletier','refuse','12042017');
INSERT INTO `demandesattestation`(`id`,`attestations_idAttestation`,`employes_idEmploye`,`etat`,`date`) VALUES (3,,'chloe.pelletier','attente','23042017');
INSERT INTO `demandesattestation`(`id`,`attestations_idAttestation`,`employes_idEmploye`,`etat`,`date`) VALUES (4,,'chloe.pelletier','attente','22052017');
INSERT INTO `demandesattestation`(`id`,`attestations_idAttestation`,`employes_idEmploye`,`etat`,`date`) VALUES (5,,'chloe.pelletier','accepte','12052017');
INSERT INTO `demandesattestation`(`id`,`attestations_idAttestation`,`employes_idEmploye`,`etat`,`date`) VALUES (6,,'chloe.pelletier','refuse','29052017');

INSERT INTO `conges`(`idConge`,`typeConge`) VALUES (1,'');
INSERT INTO `demandesconge`(`id`,`conges_idConge`,`employes_idEmploye`,`dateDebut`,`dateFin`,`etat`) VALUES (1,,'chloe.pelletier','21042016','23042017','attente');
INSERT INTO `demandesconge`(`id`,`conges_idConge`,`employes_idEmploye`,`dateDebut`,`dateFin`,`etat`) VALUES (2,,'chloe.pelletier','21042016','28042017','valide');
INSERT INTO `demandesconge`(`id`,`conges_idConge`,`employes_idEmploye`,`dateDebut`,`dateFin`,`etat`) VALUES (3,,'chloe.pelletier','05052016','12052017','valide');
INSERT INTO `demandesconge`(`id`,`conges_idConge`,`employes_idEmploye`,`dateDebut`,`dateFin`,`etat`) VALUES (4,,'chloe.pelletier','21052016','28052017','refuse');

INSERT INTO `validites`(`idValidite`,`typeValidite`) VALUES (1,'');
INSERT INTO `demandesvalidite`(`id`,`validites_idValidite`,`employes_idEmploye`,`etat`,`dateDebut`,`dateFin`) VALUES (1,,'chloe.pelletier','valide','21042016','21042017');
INSERT INTO `demandesvalidite`(`id`,`validites_idValidite`,`employes_idEmploye`,`etat`,`dateDebut`,`dateFin`) VALUES (2,,'chloe.pelletier','attente','21042017','21042018');
INSERT INTO `demandesvalidite`(`id`,`validites_idValidite`,`employes_idEmploye`,`etat`,`dateDebut`,`dateFin`) VALUES (3,,'chloe.pelletier','valide','21042017','21042018');

INSERT INTO `vehicules`(`immatriculation`,`typeVehicule`,`disponibilite`) VALUES ('AA 542 AA','Camionette 1','T');
INSERT INTO `vehicules`(`immatriculation`,`typeVehicule`,`disponibilite`) VALUES ('SLC 013 CX','Camionette 2','T');
INSERT INTO `vehicules`(`immatriculation`,`typeVehicule`,`disponibilite`) VALUES ('XLS 992 SSQ','Voiture 1','T');
INSERT INTO `vehicules`(`immatriculation`,`typeVehicule`,`disponibilite`) VALUES ('SK 623 PG','Voiture 2','T');
INSERT INTO `vehicules`(`immatriculation`,`typeVehicule`,`disponibilite`) VALUES ('ZA 746 LAM','Voiture 3','T');
INSERT INTO `vehicules`(`immatriculation`,`typeVehicule`,`disponibilite`) VALUES ('KL 644 HSA','Camion 1','T');

INSERT INTO `demandesvehicule`(`id`,`vehicules_immatriculation`,`employes_idEmploye`,`etat`,`dateDebut`,`dateFin`) VALUES (1,'XLS 992 SSQ','chloe.pelletier','valide','29042016','30042017');
INSERT INTO `demandesvehicule`(`id`,`vehicules_immatriculation`,`employes_idEmploye`,`etat`,`dateDebut`,`dateFin`) VALUES (2,'XLS 992 SSQ','chloe.pelletier','refuse','03052016','04052017');
INSERT INTO `demandesvehicule`(`id`,`vehicules_immatriculation`,`employes_idEmploye`,`etat`,`dateDebut`,`dateFin`) VALUES (3,'SLC 013 CX','chloe.pelletier','attente','29052016','30052017');

INSERT INTO `rappels`(`idRappel`,`dateRappel`,`messageRappel`,`employes_idEmploye`,`importance`) VALUES (1,'18052017','Audit Client 1 de 9h00 à 12h00, il est important pour l\'entreprise','chloe.pelletier',1);
INSERT INTO `rappels`(`idRappel`,`dateRappel`,`messageRappel`,`employes_idEmploye`,`importance`) VALUES (2,'22042016','Bon retour de vacances! Au travail maintenant!','chloe.pelletier',1);
INSERT INTO `rappels`(`idRappel`,`dateRappel`,`messageRappel`,`employes_idEmploye`,`importance`) VALUES (3,'13052016','Bon retour de vacances! Au travail maintenant!','chloe.pelletier',1);

INSERT INTO `contact`(`nomContact`,`mailContact`,`societeContact`,`messageContact`) VALUES ('DEASEGHER hugo','hugo.desaegher@gmail.com', 'Marketing', 'Message de Test 1');
INSERT INTO `contact`(`nomContact`,`mailContact`,`societeContact`,`messageContact`) VALUES ('DONQUE Julien','julien.donque@gmail.com', 'Erreur de livraison', 'Message de Test 2');
INSERT INTO `contact`(`nomContact`,`mailContact`,`societeContact`,`messageContact`) VALUES ('BIALAIS robin','robin.bialais@gmail.com', 'Produit défectueux', 'Message de Test 3');

INSERT INTO `devis`(`nomSociete`,`nomDemandeur`,`mail`,`telephone`,`adresse`,`codePostal`,`ville`,`service`,`message`) VALUES ('Konbi','ROGER mathieu','math.roger@gmail.com', '0812738913', '6 Rue de la Tour Roland','60310','Lassigny', 'Marketing', 'Message de Test 1');
INSERT INTO `devis`(`nomSociete`,`nomDemandeur`,`mail`,`telephone`,`adresse`,`codePostal`,`ville`,`service`,`message`) VALUES ('Air France','MACRON contance','constance.macron@gmail.com', '0702718393', '19 Rue de la Soaul','60310','Jepez', 'Marketing', 'Message de Test 2');
INSERT INTO `devis`(`nomSociete`,`nomDemandeur`,`mail`,`telephone`,`adresse`,`codePostal`,`ville`,`service`,`message`) VALUES ('Jocobi','SOAP leo','leo.SOAP@gmail.com', '0672037127', '10 allée des Lilas','59302','Tour', 'Comptabilité', 'Message de Test 3');

INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('ades',' Notre entreprise compte 42 employés et est active depuis 20 ans.</br>            Nous sommes spécialisé dans les travaux de menuiserie métallique et de serrurerie. </br>            Notre activité se déploit sur trois grands pôles : </br>                - La fabrication </br>                - L\'installation et la modification </br>                - L\'entretien, la maintenance et l\'expertise </br>            Nous nous occupons également de la maintenance des centrales nucléaires de Paluel et de Penly grâce à notre personnel habilité.','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('aslogan','TRAVAUX METALLIQUES DEPUIS 1996','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('cont1','OSSATURES MÉTALLIQUES','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('cont2','PORTES COUPE-FEU / PORTES ORDINAIRES / BARDAGES / ETANCHÉITÉ','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('cont3','DÉTECTION MÉTAUX','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('desRea1','Permet d\'enrouler différents types de câbles','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('desRea10','Sert...','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('desRea11','Sert...','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('desRea2','Sert à protéger des chutes','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('desRea3','Carter de protection de ventilateur','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('desRea4','Sert au transport de matériel','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('desRea5','Bureau de travail amovible','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('desRea6','Sert au traitement des déchets nucléaires','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('desRea7','Sert au traitement des déchets nucléaires','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('desRea8','Sert...','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('desRea9','Sert...','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('edf','Depuis plus de <b>10 ans </b>, nous avons les <b>qualifications </b>pour répondre aux appels d\'offres lancés par EDF. CADRE travaille essentiellement sur les Centrales de <b>Penly et Paluel</b>.','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('fab1','CHARPENTES MÉTALLIQUES / PORTE TÔLE / PLATELAGES / MONORAILS / POINTS D\'ANCRAGE / ENSEMBLE MÉCANO-SOUDÉS','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('fab2','ESCALIERS / PORTAILS / PASSERELLES / PANNEAUX GRILLAGÉS / COFFRES','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('fab3','ECHELLES / GARDES-CORPS / BARREAUDAGES / PIÈCES PLIÉS','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('histo1','Au début de la construction de la Centrale de PALUEL a été créée la société TRAMETNOR . Cette société basée à Saint Valéry a vu le jour pour assurer sur PALUEL une grande partie des travaux de montage pour le compte des Travaux Métalliques de l\'Artois (Titulaire du contrat des charpentes secondaires).','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('histo2','En 1985 , TRAMETNOR s\'est vu confier par les Travaux Métalliques de l\'Artois des activités de Montages similaires sur la centrale de Penly , tout en assurant dans un premier temps la terminaison des travaux sur PALUEL , puis des travaux de modifications et d\'entretien .','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('histo3','En 1990 , TRAMETNOR a changé de nom pour s\'appeler CADRE qui sous sa nouvelle dénomination a poursuivi l\'activité commencée sur Paluel et Penly','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('histo4','L\'année 1996 marque un virage pour l\'entreprise CADRE : changement d\'actionnariat et le début du désengagement progressif de la Société Travaux Métalliques de l\'Artois. Puis CADRE a voulu être connu et reconnu par EDF en particulier en effectuant les démarches auprès de l\'UTO et du CEFRI.','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('mod1','CHARPENTES MÉTALLIQUES / MONORAILS / CHEMINS DE ROULEMENT / POINT D\'ANCRAGE / PLATELAGES / PANNEAUX GRILLAGÉS','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('mod2','ESCALIERS / PASSERELLES / CLÔTURES / GRILLAGES / PORTES MÉTALLIQUE, COUPE-FEU, ISOPLANES, COULISSANTES / PORTAILS','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('mod3','ECHELLES / GARDE-CORPS / BARREAUDAGES / SERRURERIE / QUINCAILLERIE / COUVERTURE / BARDAGE / BAC ACIER / ETANCHÉITÉ','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea1','Touret en inox','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea10','?','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea11','?','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea1O','?','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea2','Plancher de protection','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea3','Carter','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea4','Chariot','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea5','Etabli','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea6','Panier','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea7','Panier grillagé','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea8','?','/');
INSERT INTO `elementssite` (`idElement`,`contenuElement`,`cheminElement`) VALUES ('nomRea9','?','/');

INSERT INTO `ressources`(`idRessource`,`contenuRessource`,`corpsDeMetier`,`cheminRessource`) VALUES (1,'Plan centrale','doc. entreprise','/chemin.pdf');
INSERT INTO `ressources`(`idRessource`,`contenuRessource`,`corpsDeMetier`,`cheminRessource`) VALUES (2,'Document ressource pour la mettalerie','ouvrier', '/chemin.jpg');
INSERT INTO `ressources`(`idRessource`,`contenuRessource`,`corpsDeMetier`,`cheminRessource`) VALUES (3,'Fiche qualité 1','ouvrier', '/chemin.doc');
INSERT INTO `ressources`(`idRessource`,`contenuRessource`,`corpsDeMetier`,`cheminRessource`) VALUES (4,'Fiche qualité 2','ouvrier', '/chemin.doc');
INSERT INTO `ressources`(`idRessource`,`contenuRessource`,`corpsDeMetier`,`cheminRessource`) VALUES (5,'Fiche qualité 3','ouvrier', '/chemin.doc');
INSERT INTO `ressources`(`idRessource`,`contenuRessource`,`corpsDeMetier`,`cheminRessource`) VALUES (6,'Procédure comptabilité','comptabilité', '/chemin.pdf');

INSERT INTO `evenementsautres`(`idEvenement`,`dateEvenement`,`messageEvenement`,`employes_idEmploye`) VALUES (1,'19052017','pas supprimé finalemen?','chloe.pelletier');
