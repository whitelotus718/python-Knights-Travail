from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Event(db.Model):
  __tablename__ = 'events'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  ownerId = db.Column(db.Integer, db.ForeignKey("users.id"))

  owner = db.relationship("User", back_populates="events", uselist=False)
  # owner = db.relationship("User", backref="events")
  bids = db.relationship("Bid", back_populates="event")

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "ownerId": self.ownerId,
    }
