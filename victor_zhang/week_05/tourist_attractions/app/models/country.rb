# == Schema Information
#
# Table name: countries
#
#  id         :bigint           not null, primary key
#  name       :text
#  image      :text
#  continent  :text
#  population :bigint
#  language   :text
#  currency   :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Country < ActiveRecord::Base
  has_many :destinations
end
