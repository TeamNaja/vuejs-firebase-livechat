import { ref, watchEffect } from "vue"
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {
    const error = ref(null)
    const documents = ref(null)

    let collectionRef = projectFirestore.collection(collection)
                            .orderBy('createdAt', 'asc')

    const unsub = collectionRef.onSnapshot(snap => {
        console.log('snapshot')
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id }) // createdAt only create when data reach server, to make sure data is from server not from local snap
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'
    })

    watchEffect((onInvalidate) => {
        // unsub from prev collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub())
    })

    return { documents, error }
}

export default getCollection