import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import requests
import json

firebaseConfig = {
    "apiKey": "AIzaSyBKV0Kki4mHcy3OXfkbls2c_c0se0cSGfw",
    "authDomain": "project-react-98474.firebaseapp.com",
    "projectId": "project-react-98474",
    "storageBucket": "project-react-98474.appspot.com",
    "messagingSenderId": "164269869705",
    "appId": "1:164269869705:web:37c965d1b4727fe32b9458",
    "measurementId": "G-LJJNV0LNBP"
}

# cred
cred = credentials.Certificate(
    'project-react-98474-firebase-adminsdk-dxwhw-fb61060e59.json')
# Initialiser l'application Firebase avec les informations de configuration
firebase_admin.initialize_app(cred)


# recupere toutes les cartes
def getAllCards():
    url = "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    response = requests.get(url)
    data = response.json()
    return data


# enregistre les cartes dans la base de donnée
def saveCards(data):
    db = firestore.client()

    for card in data["data"]:
        id = card["id"]
    # si "card_sets" existe
        if "card_sets" in card:
            for i in range(len(card["card_sets"])):
                setname = card['card_sets'][i]['set_name']
                # enregistre les cartes dans la base de donnée
                print(id)
                print(setname)
                j = {"id": id, "set_name": setname}
                db.collection(u'CardCollection').add(j)


def recupset_name():
    # recupere tous les différents set_name dans la base de donnée et les met dans un fichier json nommé set_name.json
    db = firestore.client()
    docs = db.collection(u'CardCollection').stream()
    set_name = []
    for doc in docs:
        set_name.append(doc["set_name"])
    sets = [{"set_name": name} for name in set_name]
    json_data = json.dumps(sets)
    # enregistre les éléments dans set_name dans un fichier json sous forme {"set_name":set_name}
    with open('set_name.json', 'w') as outfile:
        json.dump(json_data, outfile)

    # return set_name


# saveCards(getAllCards())
recupset_name()
