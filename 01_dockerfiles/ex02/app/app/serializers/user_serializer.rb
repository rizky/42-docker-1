# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string
#  session_key     :string
#  activation_key  :string
#  bio             :string
#  created_at      :datetime
#  updated_at      :datetime
#  full_name       :string
#
# Indexes
#
#  index_users_on_session_key  (session_key)
#

class UserSerializer < ActiveModel::Serializer
  attributes :id, :bio, :email, :full_name, :gravatar_url

end
