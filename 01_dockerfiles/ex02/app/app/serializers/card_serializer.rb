# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  list_id     :integer          not null
#  title       :string           not null
#  description :text
#  due_date    :datetime
#  open        :boolean          default(TRUE), not null
#  created_at  :datetime
#  updated_at  :datetime
#  position    :integer
#  assignee_id :integer
#
# Indexes
#
#  index_cards_on_list_id  (list_id)
#

class CardSerializer < ActiveModel::Serializer
  attributes :id, :comments_count, :description, :due_date, :list_id,
    :open, :position, :title

  has_one :assignee, embed: :objects
  has_many :comments, embed: :objects

  def list_id
    object.list.id
  end
end
