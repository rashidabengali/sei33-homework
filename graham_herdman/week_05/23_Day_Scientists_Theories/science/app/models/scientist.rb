# == Schema Information
#
# Table name: scientists
#
#  id         :bigint           not null, primary key
#  name       :text
#  dob        :date
#  fields     :text
#  known_for  :text
#  trivia     :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Scientist < ActiveRecord::Base
  has_many :theories
end
