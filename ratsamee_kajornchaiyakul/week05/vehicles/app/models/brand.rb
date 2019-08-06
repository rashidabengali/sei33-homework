# == Schema Information
#
# Table name: brands
#
#  id         :bigint           not null, primary key
#  name       :text
#  country    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Brand < ActiveRecord::Base
    has_many :motorbikes
end
