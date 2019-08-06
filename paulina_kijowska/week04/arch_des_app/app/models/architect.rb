# == Schema Information
#
# Table name: architects
#
#  id          :bigint           not null, primary key
#  name        :text
#  nationality :text
#  dob         :date
#  image       :text
#  famous      :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Architect < ActiveRecord::Base
has_many :houses
end
