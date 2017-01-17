from flask import Flask, url_for, request,render_template
app = Flask(__name__)

@app.route("/",methods=["GET"])
def hello():
	return render_template('calcUsingjQuery.html')

    
@app.route("/home",methods=["GET"])
def func1():
	if request.args.get("x"):

		x = request.args.get("x")
		y = request.args.get("y")
		operation= request.args.get("operation")
		
	 	if operation == "add":
	 		answer=int(x) + int(y)
	 	elif operation == "subtract":
	 		answer=int(x)-int(y)
	 	elif operation == "multiply":
	 		answer= int(x)*int(y)
	 	elif operation == "divide":
	 		answer=int(x)/int(y)

		return render_template('home.html', answer=answer)
	else:
		return render_template('home.html')


if __name__ == "__main__":
    app.run(debug=True,port=7978)