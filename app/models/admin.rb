class Admin < ApplicationRecord
  devise :database_authenticatable,
    :registerable,
    :rememberable,
    :trackable,
    :validatable

  validates :name, presence: true, uniqueness: { scope: :email }
  validates :email, presence: true, uniqueness: true
  validates_email_format_of :email
  validates :encrypted_password, presence: true, length: { minimum: 6 }
end
