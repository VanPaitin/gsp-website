ActiveAdmin.register Album do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :event, :date, pictures: []

# or
#
# permit_params do
  # permitted = [:permitted, :attributes]
  # permitted << :other if params[:action] == 'create' && current_user.admin?
  # permitted
# end
  form multipart: true do |f|
    f.semantic_errors

    inputs 'Details' do
      input :event
      input :date, as: :datepicker, datepicker_options: { max_date: "+0D" }
    end

    panel 'Add Images' do
      input :pictures, as: :file, input_html: { multiple: true }
    end

    actions
  end

  show title: :event do
    h3 album.date.strftime("%A, %B %-d, %Y")

    album.pictures.each do |picture|
      div class: 'grid-item' do
        div image_tag picture.variant(resize: '200 x 200').processed
        div link_to('Delete', album_picture_path(album, picture), method: :delete, data: { confirm: 'Do you really want to delete the picture' })
      end
    end
  end
end
