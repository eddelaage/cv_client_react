import React from 'react'

import ImageGallery from 'react-image-gallery';

import './HanalyticsDetail.css'

import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import Nav from './Nav'

import PourUneAutrePac1 from '../img/PourUneAutrePac/1.png'
import PourUneAutrePacLitle1 from '../img/PourUneAutrePac/Litle/1.png'
import PourUneAutrePac2 from '../img/PourUneAutrePac/2.png'
import PourUneAutrePacLitle2 from '../img/PourUneAutrePac/Litle/2.png'
import PourUneAutrePac3 from '../img/PourUneAutrePac/3.png'
import PourUneAutrePacLitle3 from '../img/PourUneAutrePac/Litle/3.png'
import PourUneAutrePac4 from '../img/PourUneAutrePac/4.png'
import PourUneAutrePacLitle4 from '../img/PourUneAutrePac/Litle/4.png'
import PourUneAutrePac5 from '../img/PourUneAutrePac/5.png'
import PourUneAutrePacLitle5 from '../img/PourUneAutrePac/Litle/5.png'
import PourUneAutrePac6 from '../img/PourUneAutrePac/6.png'
import PourUneAutrePacLitle6 from '../img/PourUneAutrePac/Litle/6.png'
import PourUneAutrePac7 from '../img/PourUneAutrePac/7.png'
import PourUneAutrePacLitle7 from '../img/PourUneAutrePac/Litle/7.png'
import PourUneAutrePac8 from '../img/PourUneAutrePac/8.png'
import PourUneAutrePacLitle8 from '../img/PourUneAutrePac/Litle/8.png'

const images = [
  {
    original: PourUneAutrePac1,
    thumbnail: PourUneAutrePacLitle1
  },
  {
    original: PourUneAutrePac2,
    thumbnail: PourUneAutrePacLitle2
  },
  {
    original: PourUneAutrePac3,
    thumbnail: PourUneAutrePacLitle3
  },
  {
    original: PourUneAutrePac4,
    thumbnail: PourUneAutrePacLitle4
  },
  {
    original: PourUneAutrePac5,
    thumbnail: PourUneAutrePacLitle5
  },
  {
    original: PourUneAutrePac6,
    thumbnail: PourUneAutrePacLitle6
  },
  {
    original: PourUneAutrePac7,
    thumbnail: PourUneAutrePacLitle7
  },
  {
    original: PourUneAutrePac8,
    thumbnail: PourUneAutrePacLitle8
  }
]

const PourUneAutrePac = () => {
  return (
    <div className="Header" id="Header">
      <div>
        <div className="background_img">
          <Nav />
        </div>
      </div>
      <div className="hanalytics-electron-title">
        <h2>Pour une autre PAC </h2>
      </div>
      <div className="container-presentation">
        <div className="container-imgaeGallery">
          <ImageGallery items={images} />
        </div>
        <div className="hanalytics-electron-detail">
          <h3>Réalisation du site Internet de l'association Pour Une Autre Pac</h3>
          <p>Pour une autre PAC est une plateforme française inter‐organisations constituant un espace commun de réflexion et d’action, en vue de la refonte de la politique agricole commune (PAC).</p>
          <ul>
            <li>Zone administrable (CRUD)
              <ul>
                <li>création/édition/suppression de contenu (article)
                  <ul>
                    <li>type/catégorie (actualite, evenement, presse, communiqués de presse)</li>
                    <li>droits d'accès/consultation (public ou membres)</li>
                    <li>titre+description</li>
                    <li>date (si evénement)</li>
                    <li>image (uploadés) + légende</li>
                    <li>tags</li>
                    <li>urls des documents pièces jointes (uploadés via l’outil d’upload)</li>
                  </ul>
                </li>
                <li>upload de documents (pdf, Word, PowerPoint, Excel, jpeg, gif, png)
                  <li>titre+date...</li>
                  <li>nature du document
                    <ul>
                      <li>textes politiques</li>
                      <li>documents de position des organisations membres</li>
                      <li>travaux de recherche</li>
                      <li>autres documents de position</li>
                      <li>documents réservés aux membres</li>
                    </ul>
                  </li>
                  <li>tags</li>
                  <li>droits d'accès/consultation (public ou membres)</li>
                  <li>spécifie si c’est une ‘ressource’ ou non (checkbox)</li>
                </li>
                <li>CRUD sur les documents uploadé</li>
                <li>sélectionner l’article ‘a la une’ de la page d'actualité</li>
                <li>sélection des X articles à faire apparaître dans le carrousel de l’accueil</li>
                <li>modifier l’identifiant/mdp du compte membre</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>Gestion utilisateurs / rôles
              <ul>
                <li>Connection accès membres (ouvre à des droits supplémentaires consultation/téléchargement
                de documents, événements sur le calendrier)</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>Layout
              <ul>
                <li>Haut de page / Headrer
                  <ul>
                    <li>Logo (retour à la page d’accueil)</li>
                    <li>Bouton ‘se connecter’ (un seul compte membre (identifiant / mot de passe) pour toute
                    la plateforme)</li>
                    <li>Barre de recherche (basé sur les tags des articles)</li>
                  </ul>
                </li>
                <li>Menu (Navbar) des rubriques déroulants pour afficher les sous-rubriques (voir architecture)</li>
                <li>Menu latérale (Sidebar)
                  <ul>
                    <li>Actu</li>
                    <li>Événements (ou (+) Calendrier en vue mensuelle (case colorée si un événement a lieu
                    ce jour, clic redirige vers l’article de l'événement (pas plus d’un événement par jour))</li>
                    <li>Ressources</li>
                    <li>Nous contacter</li>
                    <li>Collecte (en base de données) des adresses mails des personnes intéressées pour
                    suivre l’actualité via un formulaire (attention au format européen RGPD - coche
                    “j’accepte de recevoir...”)</li>
                  </ul>
                </li>
                <li>Bandeau de relai d’une page sur les réseaux sociaux</li>
                <li>Pied de page (Footer)
                  <ul>
                    <li>CGU (mentions légales)</li>
                    <li>copyright</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PourUneAutrePac
