const mongoose = require('mongoose');

const dbConnection = async () => {

    //DEPRECADO:

    // try {
    //     await mongoose.connect('mongodb+srv://mean_user:BB3Abf3SnVjqQegi@cluster0.o4bqi.mongodb.net/hospitaldb', {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         useCreateIndex: true
    //     });

    //     console.log('DB Online');

    // } catch (error) {
    //     console.log(error);
    //     throw new Error ('Error a la hora de iniciar la DB ver Logs');
    // }

    //NUEVA VERSION:
    const dbConnection = async () => {
        try {
            await mongoose.connect(process.env.DB_CNN, {
                
            });
            console.log('Connection succsessful');
        } catch (error) {
            console.error(error);
            throw new Error('Error trying to connect');
        }
    }

}

module.exports = {
    dbConnection
}