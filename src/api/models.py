from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __init__(self,name, email, password):
        self.name = name
        self.email = email
        self.password = password
        self.is_active = False      
        db.session.add(self)
        db.session.commit()

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Character(db.Model):
    __tablename__ = 'character'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    gender = db.Column(db.String(150))
    birth_year = db.Column(db.String(150))
    height = db.Column(db.String(150))

    def __init__(self,name, gender, birth_year,height):
        self.name = name
        self.gender = gender
        self.birth_year = birth_year
        self.height = height 
        db.session.add(self)
        db.session.commit()
    
    def __repr__(self):
        return '<Character %r>' % self.user_id
    
    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "gender":self.gender,
            "birth_year":self.birth_year,
            "height":self.height
        }

class Planet(db.Model):
    __tablename__ = 'planet'  
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    terrain = db.Column(db.String(150))
    climate = db.Column(db.String(150))
    population = db.Column(db.String(150))

    def __init__(self,name, terrain, climate,population):
        self.name = name
        self.terrain =terrain
        self.climate = climate
        self.population = population 
        db.session.add(self)
        db.session.commit()

    def __repr__(self):
        return '<Planet %r>' % self.user_id
    
    def serialize(self):
        return {
            "id":self.id,
            "name":self.name,
            "terrain":self.terrain,
            "climate":self.climate,
            "population":self.population

        }

class Favorite(db.Model):
    __tablename__ = 'favorite'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    character_id = db.Column(db.Integer, db.ForeignKey("character.id"))
    planet_id = db.Column(db.Integer, db.ForeignKey("planet.id"))
    
    def delete(self):
        db.session.delete(self)
        try:
            db.session.commit()
            return True
        except Exception as error:
            print(error.args)
            return False
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "character_id": self.character_id,
            "planet_id": self.planet_id
        }

    
    