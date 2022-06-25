from glob import glob
from os import path

import cv2


directory_str = "assets/Wedding_Photos"
ret_list = []

def get_files_in(folder, pattern='*.jpg'):
    return glob(path.join(folder, pattern))

files = get_files_in(f"src/{directory_str}")

for file in files:
    end_path = str(file).split("/")[-1]
    im = cv2.imread(file)
    h, w, c = im.shape
    ret_list.append({
        "src": f"require ('./{directory_str}/{end_path}')",
        "width": w,
        "height": h
    })

sorted_ret_list = sorted(ret_list, key=lambda d: d['src'])

print("[")
for record in sorted_ret_list:
    print("{")
    for key in record:
        print(f"{key}: {record[key]},")
    print("},")
print("]")

