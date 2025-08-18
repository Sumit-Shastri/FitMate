import os
import shutil
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

FRONTEND_DIR = Path("Frontend")
TEMPLATES_DIR = Path("Backend/project_01/templates")
STATIC_DIR = Path("Backend/project_01/static")

def process_html(file_path, dest_path):
    """Copy HTML file and add Django template tags + csrf token"""
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # Add {% load static %} at the very top if not present
    if "{% load static %}" not in lines[0]:
        lines.insert(0, "{% load static %}\n")

    # Insert csrf_token inside <form> tags and add name= to inputs/selects
    new_lines = []
    for line in lines:
        if "<form" in line and "{% csrf_token %}" not in line:
            new_lines.append(line)
            new_lines.append("    {% csrf_token %}\n")
        elif "<select" in line and "name=" not in line:
            line = line.replace("<select", '<select name="country"')
            new_lines.append(line)
        elif "<input" in line and "name=" not in line:
            line = line.replace("<input", '<input name="input_field"')
            new_lines.append(line)
        else:
            new_lines.append(line)

    with open(dest_path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)

def process_file(src_path):
    """Decide where to copy based on extension"""
    ext = src_path.suffix.lower()
    file_name = src_path.name

    if ext == ".html":
        dest_path = TEMPLATES_DIR / file_name
        process_html(src_path, dest_path)
        print(f"✅ Processed HTML: {file_name}")
    elif ext in [".css", ".js", ".jpg", ".png", ".jpeg", ".gif", ".svg"]:
        # Put in static/<file_name_without_ext>/
        folder_name = src_path.stem
        dest_folder = STATIC_DIR / folder_name
        dest_folder.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src_path, dest_folder / file_name)
        print(f"✅ Copied static: {file_name}")
    else:
        print(f"⚠️ Skipped unsupported file: {file_name}")

class FrontendHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if not event.is_directory:
            process_file(Path(event.src_path))

    def on_created(self, event):
        if not event.is_directory:
            process_file(Path(event.src_path))

if __name__ == "__main__":
    observer = Observer()
    event_handler = FrontendHandler()
    observer.schedule(event_handler, str(FRONTEND_DIR), recursive=True)
    observer.start()
    print("🚀 Auto-sync running... Watching Frontend folder.")
    try:
        while True:
            pass
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
