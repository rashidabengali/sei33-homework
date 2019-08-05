# == Schema Information
#
# Table name: destinations
#
#  id         :bigint           not null, primary key
#  name       :text
#  location   :text
#  map        :text
#  features   :text
#  rating     :text
#  image      :text
#  country_id :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Destination < ActiveRecord::Base
  belongs_to :country, :optional => true
end
