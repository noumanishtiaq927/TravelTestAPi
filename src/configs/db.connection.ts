import {connect} from 'mongoose'
import {dbHost, dbName, dbPassword, dbUser} from '../utils/constants'

export class MongoDb {
	constructor() {}
	// connection url
	connectionUri: string = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`
	connect() {
		connect(
			this.connectionUri,

			{
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useFindAndModify: false,
				useCreateIndex: true,
			},

			(err: any) => {
				if (err) {
					console.log(err)
					console.log('database connection failed')
				} else {
					console.log('connected with database')
				}
			}
		)
	}
}
