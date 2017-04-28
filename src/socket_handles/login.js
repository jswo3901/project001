  import { MongoClient } from 'mongodb';
import md5 from 'md5';
import { emitObj } from '../socket_handle';

const login_handle = (socket, data) => {
  if ( typeof process.env.MONGOURI == 'undefined')
    return emitObj (socket, 'login', {
      server_error: "Environment variable MONGOURI Not Found"
    }, console.error);

    MongoClient.connect (process.env.MONGOURI, (err, db) => {
      if ( err )
      return emitObj (socket, 'signup', {
        server_error: 'MongoDB connect failed. Description: ' + err.message
      }, console.warn)

      db.clse();
    });
  };

export deafult login_handle;
