# == Schema Information
#
# Table name: beaches
#
#  id         :integer          primary key
#  name       :text
#  image      :text
#  location   :text
#  area       :float
#  population :integer
#

class Beach < ActiveRecord::Base
end
