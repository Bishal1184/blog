class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :blog_id
      t.string :blog_title
      t.string :blog_description
      t.string :blog_image

      t.timestamps
    end
  end
end
