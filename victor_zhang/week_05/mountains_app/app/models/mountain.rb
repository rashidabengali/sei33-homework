# == Schema Information
#
# Table name: mountains
#
#  id       :integer          primary key
#  name     :text
#  image    :text
#  height   :float
#  location :text
#  fact     :text
#

class Mountain < ActiveRecord::Base
end
