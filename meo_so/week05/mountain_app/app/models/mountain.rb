# == Schema Information
#
# Table name: mountains
#
#  id         :integer          primary key
#  name       :text
#  height     :float
#  coordinate :text
#  image      :text
#

class Mountain < ActiveRecord::Base
end
