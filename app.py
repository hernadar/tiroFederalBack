from flask import Flask , render_template,jsonify ,request, redirect
# del modulo flask importar la clase Flask y los métodos jsonify,request
import time
from flask_cors import CORS # del modulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
#Para subir archivo tipo foto al servidor
from werkzeug.utils import secure_filename
import os

app=Flask(__name__) # crear el objeto app de la clase Flask
CORS(app) #modulo cors es para que me permita acceder desde el frontend al backend
# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://hernadar:tirofederaltrelew@hernadar.mysql.pythonanywhere-services.com/hernadar$tirofederaltrelew'
# app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:192611Dh@localhost/tirofederaltrelew'
# URI de la BBDD driver de la BD user:clave@URLBBDD/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False #none
db= SQLAlchemy(app) #crea el objeto db de la clase SQLAlquemy
ma=Marshmallow(app) #crea el objeto ma de de la clase Marshmallow
# defino la tabla

class Novedad(db.Model): # la clase Producto hereda de db.Model
    id=db.Column(db.Integer, primary_key=True) #define los campos de la tabla
    imagen=db.Column(db.String(45))
    lugar=db.Column(db.String(100))
    titulo=db.Column(db.String(400))
    intro=db.Column(db.String(700))
    info=db.Column(db.String(2000))
    fecha=db.Column(db.Date())
    def __init__(self,imagen,lugar,titulo,intro,info, fecha): #crea el constructor de la clase
        self.imagen=imagen # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.lugar=lugar
        self.titulo=titulo
        self.intro=intro
        self.info=info
        self.fecha=fecha

        # si hay que crear mas tablas , se hace aqui
with app.app_context():
    db.create_all() # aqui crea todas las tablas
class NovedadSchema(ma.Schema):
    class Meta:
        fields=('id','imagen','lugar','titulo','intro','info', 'fecha')

novedad_schema=NovedadSchema() # El objeto novedad_schema es para traer una novedad
novedades_schema=NovedadSchema(many=True) # El objeto novedades_schema es para traer multiples registros de novedades


# crea los endpoint o rutas (json) API REST
@app.route('/novedades',methods=['GET'])
def get_Novedades():
    all_novedades=Novedad.query.all() # el metodo query.all() lo hereda de db.Model
    result=novedades_schema.dump(all_novedades) # el metodo dump() lo hereda de ma.schema y

    # trae todos los registros de la tabla
    return jsonify(result) # retorna un JSON de todos los registros de la tabla

@app.route("/novedades/<id>", methods=["GET"])
def get_novedad(id):
    """
    Endpoint para obtener una novedad específica de la base de datos.

    Retorna un JSON con la información de la novedad correspondiente al ID proporcionado.
    """
    novedad = Novedad.query.get(id)  # Obtiene la novedad correspondiente al ID recibido
    return novedad_schema.jsonify(novedad)  # Retorna el JSON de la novedad




@app.errorhandler(404)
def not_found(error):
    return 'Ruta no encontrada'

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/administracion', methods=['GET'])
def administracion():
    return render_template('administracion.html')
#Redireccionando cuando la página no existe



#Crear una Novedad

@app.route('/crear', methods=['POST', 'GET']) # crea ruta o endpoint
def create_novedades():
    if request.method == 'GET':
        return render_template('formulario.html')

#print(request.json) # request.json contiene el json que envio el cliente
    if request.method == 'POST':
        fecha = request.form['fecha']
        titulo= request.form['titulo']
        intro = request.form['intro']
        info = request.form['info']
        lugar = request.form['lugar']
        imagen = request.files['imagen']
        basepath = os.path.dirname (__file__) #La ruta donde se encuentra el archivo actual
        filename = secure_filename(imagen.filename) #Nombre original del archivo

        #capturando extensión del archivo ejemplo: (.png, .jpg, .pdf ...etc)
        extension           = os.path.splitext(filename)[1]
        nuevoNombreImagen     = str(int(time.time()*1000)) + extension
        upload_path = os.path.join (basepath, 'static/img/imgNovedades', nuevoNombreImagen)
        imagen.save(upload_path)


        new_novedad=Novedad(nuevoNombreImagen, lugar, titulo, intro,info, fecha)
        db.session.add(new_novedad)
        db.session.commit()
        return redirect("/administracion")
    return render_template('index.html')

#Editar Novedad

@app.route('/edicion/<id>', methods=['POST', 'GET'])
def get_edicion(id):
        if request.method == 'GET':
            return render_template('formularioEdicion.html', id=id)
        if request.method == 'POST':
            novedad=Novedad.query.get(id)
            novedad.fecha = request.form['fecha']
            novedad.titulo = request.form['titulo']
            novedad.intro = request.form['intro']
            novedad.info = request.form['info']
            novedad.lugar = request.form['lugar']
            imagen = request.files['imagen']
            basepath = os.path.dirname (__file__) #La ruta donde se encuentra el archivo actual
            filename = secure_filename(imagen.filename) #Nombre original del archivo

            #capturando extensión del archivo ejemplo: (.png, .jpg, .pdf ...etc)
            extension = os.path.splitext(filename)[1]
            nuevoNombreImagen     = str(int(time.time()*1000)) + extension
            upload_path = os.path.join (basepath, 'static/img/imgNovedades', nuevoNombreImagen)
            imagen.save(upload_path)
            novedad.imagen = nuevoNombreImagen
            db.session.commit()
            return redirect("/administracion")

#Elminiar Noovedad

@app.route('/eliminar/<id>', methods=['DELETE'])
def delete_novedad(id):
    novedad=Novedad.query.get(id)
    db.session.delete(novedad)
    db.session.commit()
    return novedad_schema.jsonify(novedad)   # me devuelve un json con el registro eliminado



# programa principal *******************************
if __name__=='__main__':
    app.run(debug=True, port=5000) # ejecuta el servidor Flask en el puerto 5000