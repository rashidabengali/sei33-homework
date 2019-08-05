# == Schema Information
#
# Table name: houses
#
#  id         :bigint           not null, primary key
#  title      :text
#  year       :text
#  country    :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class House < ActiveRecord::Base
  belongs_to :architect, :optional => true
end
