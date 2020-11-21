#print("API de doctores")

from mysql.connector import Error
from fastapi import FastAPI
import mysql.connector
import secrets

app = FastAPI()

@app.get("/")
def home():
    return{"Bienvenido"}

@app.get("/registroDoc/{nombre}/{apellido}/{email}/{clave}")
def registroDoc(nombre: str, apellido: str, email: str, clave: str):

    #conexion a bd
    conn = None
    try:
        conn = mysql.connector.connect(host='localhost',
                                       database='aplicaciondoctores',
                                       user='YelinDBManager',
                                       password='mysql')
        if conn.is_connected():
            print('Connected to MySQL database')

    except Error as e:
        print(e)

    
    #crear usuario
    user = (nombre, apellido, email, clave)

    #validar creacion de usuario
    row = None
    cur = conn.cursor()
    sql = ("SELECT email FROM doctores WHERE email = %s")

    cur.execute(sql, (email,))

    rows = cur.fetchall()

    for r in rows:
        row = r

    if (row == None):
        sql = '''INSERT INTO doctores(nombre, apellido, email, clave, token) values(%s,%s,%s,%s,null)'''
        cur = conn.cursor()
        cur.execute(sql, user)
        conn.commit()

        msg = "Doctor registrado exitosamente"
    else:
        msg = "No fue posible realizar el registro, correo ya registrado"

    return{"result":msg, "ok":"true"}

@app.get("/inicio_sesion/{email}/{clave}")
def inicio_sesion(email: str, clave: str):

    #conexion a bd
    conn = None
    try:
        conn = mysql.connector.connect(host='localhost',
                                       database='aplicaciondoctores',
                                       user='YelinDBManager',
                                       password='mysql')
        if conn.is_connected():
            print('Connected to MySQL database')

    except Error as e:
        print(e)
    
    #validar credenciales de usuario
    row = None
    cur = conn.cursor()
    
    sql = "SELECT * FROM doctores WHERE email = %s AND clave = %s"
    cur.execute(sql, (email, clave,))

    rows = cur.fetchall()

    for r in rows:
        row = r
    
    if (row == None):
        msg = "Email o clave incorrectos"
    else:
        token = secrets.token_hex(3)

        login_sql = "UPDATE doctores SET token = %s WHERE email = %s AND clave = %s"
        cur.execute(login_sql, (token, email, clave))
        conn.commit()
        
        msg = "Inicio de sesion exitoso, su token: "+str(token)

    return{"result": msg, "ok":"true"}

@app.get("/registro_paciente/{cedula}/{nombre}/{apellido}/{sangre}/{gen}/{fecha_nac}/{alergias}/{emailDoc}")
def registro_paciente(cedula: str, nombre: str, apellido: str, sangre: str, gen: str, fecha_nac: str, alergias: str, emailDoc: str):

    #conexion a bd
    conn = None
    try:
        conn = mysql.connector.connect(host='localhost',
                                       database='aplicaciondoctores',
                                       user='YelinDBManager',
                                       password='mysql')
        if conn.is_connected():
            print('Connected to MySQL database')

    except Error as e:
        print(e)
    
    #buscar id del doctor
    row = None

    cur = conn.cursor()
    sql = "SELECT id_doctor FROM doctores WHERE email = %s"
    cur.execute(sql, (emailDoc,))

    row = cur.fetchone()

    if (row == None):
        msg = "Doctor no encontrado"
    else:
        #registrar paciente
        idDoc = int(row[0])
        p = (cedula, nombre, apellido, sangre, gen, fecha_nac, alergias, idDoc)

        sql = "INSERT INTO pacientes(cedula, nombre, apellido, tipo_sangre, genero, fecha_nacimiento, alergias, foto, id_doctor) VALUES(%s,%s,%s,%s,%s,%s,%s,null,%s)"
        cur.execute(sql, p)
        conn.commit()

        msg = "Paciente registrado exitosamente"

    return{"result": msg, "ok":"true"}

@app.get("/registro_consulta/{ced_paciente}/{emailDoc}/{fecha}/{motivo}/{num_seguro}/{monto}/{diag}")
def registro_consulta(ced_paciente: str, emailDoc: str, fecha: str, motivo: str, num_seguro: str, monto: str, diag: str):

    #conexion a bd
    conn = None
    try:
        conn = mysql.connector.connect(host='localhost',
                                       database='aplicaciondoctores',
                                       user='YelinDBManager',
                                       password='mysql')
        if conn.is_connected():
            print('Connected to MySQL database')

    except Error as e:
        print(e)
    
    #buscar id de doctor y id de paciente
    row = None

    cur = conn.cursor()
    sql = '''SELECT p.id_paciente, d.id_doctor FROM doctores d
            JOIN pacientes p ON (d.id_doctor=p.id_doctor)
            WHERE d.email = %s AND p.cedula = %s'''
    cur.execute(sql, (emailDoc, ced_paciente))

    rows = cur.fetchall()
    for r in rows:
        row = r
    if (row == None):
        msg = "Doctor o paciente no encontrados, verifique que el e-mail del doctor y la cedula del paciente sean correctos"
    else:
        idPaciente = int(row[0])
        idDoc = int(row[1])
        
        #registrar consulta
        consulta = (idPaciente, idDoc, fecha, motivo, num_seguro, monto, diag)
        sql = '''INSERT INTO consultas(id_paciente, id_doctor, fecha, motivo, seguro, monto, diagnostico, nota, evidencia) VALUES(%s,%s,%s,%s,%s,%s,%s,null,null)'''
        cur.execute(sql, consulta)
        conn.commit()

        msg = "Consulta agendada exitosamente"

    return{"result": msg, "ok":"true"}

@app.get("/consultar_paciente/{cedula}")
def consultar_paciente(cedula: str):

    #conexion a bd
    conn = None
    try:
        conn = mysql.connector.connect(host='localhost',
                                       database='aplicaciondoctores',
                                       user='YelinDBManager',
                                       password='mysql')
        if conn.is_connected():
            print('Connected to MySQL database')

    except Error as e:
        print(e)

    #consultar
    sql = '''SELECT * FROM pacientes WHERE cedula = %s'''
    cur = conn.cursor()
    cur.execute(sql, (cedula,))

    r=0
    rows = cur.fetchall()
    while r in range(0,len(rows)):
        dato = rows[r]
        msg = str(dato)
        r+=1

    return{"result": msg, "ok":"true"}




