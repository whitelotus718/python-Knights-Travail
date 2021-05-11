from .db import db

class Bid(db.Model):
  __tablename__ = 'bids'

  id = db.Column(db.Integer, primary_key=True)
  isAccepted = db.Column(db.Boolean)
#   ownerId = db.Column(db.Integer, db.ForeignKey("users.id"))
  artistId = db.Column(db.Integer, db.ForeignKey("users.id"))
  eventId = db.Column(db.Integer, db.ForeignKey("events.id"))
  event = db.relationship("Event", back_populates="bids", uselist=False)
#   owner = db.relationship("User", back_populates="bids", uselist=False)
  # owner = db.relationship("User", backref="events")

  def to_dict(self):
    return {
      "id": self.id,
      "owner": self.event.owner
    }
