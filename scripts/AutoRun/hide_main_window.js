importClass(Packages.ij.IJ)
importClass(Packages.ij.WindowManager)
importClass(Packages.java.awt.event.WindowAdapter)
importClass(Packages.java.awt.event.WindowEvent)
importClass(Packages.java.io.File)
importClass(Packages.java.lang.System)
importClass(Packages.org.scijava.util.DigestUtils)
importClass(Packages.org.scijava.util.FileUtils)



try{
	// print("Welcome!");
	name = String(IJ.getInstance());
	while(name.contains('invalid')){
		name = String(IJ.getInstance());
	}
	IJ.getInstance().setVisible(false);
	// print(name.includes("invalid"))
	// log_frame = WindowManager.getFrame("Log");
	// if (log_frame != null)
		// log_frame.close();
	// print(IJ.getInstance());
	// for(var i=0;i<10;i++){
		// print(IJ.getInstance());
		// IJ.getInstance().setVisible(false);
		// Thread.sleep(100);
	// }
}
catch(e) {	
	print(e);
	System.out.println(e);
}

null