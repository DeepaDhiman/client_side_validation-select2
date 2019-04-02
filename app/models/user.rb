class User < ApplicationRecord
  validates :name, :title,:country, presence: true
  validates_uniqueness_of :name
end
