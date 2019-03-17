ActiveAdmin.register Program do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :name, :date, pictures: []
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
  form multipart: true do |f|
    f.semantic_errors

    inputs 'Details' do
      input :name
      input :date, as: :datepicker, datepicker_options: { min_date: "-0D" }
    end

    panel 'Add Images' do
      input :pictures, as: :file, input_html: { multiple: true }
    end

    actions
  end

  show title: :name do
    h3 program.date.strftime("%A, %B %-d, %Y")

    program.pictures.each do |picture|
      div class: 'grid-item' do
        div image_tag picture.variant(resize: '200 x 200').processed
        div link_to('Delete', picture_path(picture, record_type: 'program', record_id: program.id), method: :delete, data: { confirm: 'Do you really want to delete the picture' })
      end
    end
  end
end
