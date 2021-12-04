import os
import sys
import argparse

#-------------------------------------------------------------------------------------------
# arguments for main
parser = argparse.ArgumentParser(description='pipeline')
parser.add_argument('-i',  
    action='store', 
    dest='i',
    type=str,
    help="input data for pipeline")


#-------------------------------------------------------------------------------------------
# global variables for more descriptive code

#-------------------------------------------------------------------------------------------
# main, serves as pipeline
def main():
	print("You ran the pipeline")


#-------------------------------------------------------------------------------------------
if __name__ == "__main__":
    main()