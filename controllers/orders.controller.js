//CREATE ONE ORDER - POST
export const createOneOrder = (req, res, next) => {
    res.status(201).json(
        { 
            message: `create one order`, 
            data : req.body 
        }
    );
}

// GET ONE ORDER BY ID - GET
export const getOneOrderById = (req, res, next) => {
    const orderId = req.params.id;
    res.status(200).json(
        { 
            message: `Get one order by id : ${orderId}`
        }
    );
}

// GET ALL ORDERS - GET
export const getOrders = (req, res, next) => {
    res.status(200).json(
        {
            message : 'Get all orders' 
        }
    );
}

// UPDATE ONE ORDER BY ID - PUT
export const updateOneOrderById = (req, res, next) => {
    const orderId = req.params.id;
    res.status(200).json(
        { 
            message: `edit one order by id ${orderId}`,
            data : req.body 
        }
    )
}

//DELETE ONE ORDER BY ID - DELETE
export const deleteOneOrderById = (req, res, next) => {
    const orderId = req.params.id;
    res.status(200).json(
        { 
            message: `Delete one order by id : ${orderId}` 
        }
    );
}