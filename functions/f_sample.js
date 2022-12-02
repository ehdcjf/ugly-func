const functions = require("firebase-functions");

exports.addMessage = functions.https.onRequest(async (req, res) => {
        const original = req.query.text;
        // Push the new message into Firestore using the Firebase Admin SDK.
        const writeResult = await admin.firestore().collection('messages').add({ original: original });
        // Send back a message that we've successfully written the message
        res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
        .onCreate((snap, context) => {

                const original = snap.data().original;

                functions.logger.log('Uppercasing', context.params.documentId, original);

                const uppercase = original.toUpperCase();

                return snap.ref.set({ uppercase }, { merge: true });
        });

