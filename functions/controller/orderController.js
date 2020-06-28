

const getBill = (req, res) => {
    try{

        return res.status(200).send({
            amount: 1000,
            currency: 'NGN'
        })
    }catch(error){
        console.error(error)
    }
}

module.exports = {
    getBill
}

/*
'pickupLat': state.delivery.pickup.geometry.location.lat.toString(),
             'pickupLng': state.delivery.pickup.geometry.location.lat.toString(),
              'destinationLat': state.delivery.deliverTo.geometry.location.lat.toString(),
              'destinationLng': state.delivery.deliverTo.geometry.location.lng.toString()

*/