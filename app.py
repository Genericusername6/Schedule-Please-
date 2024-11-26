import flask

app = flask.Flask(__name__)

@app.route("/<file>.<ext>")
def serveCss(file, ext):
    return app.send_static_file(f'{file}.{ext}')

@app.route("/")
def whatever():

    return flask.render_template("schedule_form.html")
