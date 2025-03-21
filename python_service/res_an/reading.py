import pdfplumber

# undo the all the comment if you want to know how the pdf is saved as a text form and copy the  pdf path and gove it below
# pdf_path=r"give path here"

# output_txt_path="output.txt"

def filered(file_path):
    with pdfplumber.open(file_path) as pdf:
        extracted_text=""
        for page in pdf.pages:
            extracted_text += page.extract_text() + "\n"
    return extracted_text


# def filewrit(ext_data):
#     with open(output_txt_path,"w",encoding="utf-8") as txt_file:         
#         txt_file.write(ext_data)


# read_file=filered(pdf_path)
# # filewrit(read_file)
# print(f"Text extracted and saved to {output_txt_path}")