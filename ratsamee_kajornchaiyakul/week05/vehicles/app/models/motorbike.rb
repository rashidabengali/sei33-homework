# == Schema Information
#
# Table name: motorbikes
#
#  id           :bigint           not null, primary key
#  year         :text
#  color        :text
#  body         :text
#  price        :float
#  image        :text
#  descriptions :text
#  brand_id     :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Motorbike < ActiveRecord::Base
    belongs_to :brand, :optional => true
end
