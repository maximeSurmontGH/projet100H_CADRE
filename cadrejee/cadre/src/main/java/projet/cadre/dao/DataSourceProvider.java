package projet.cadre.dao;

import javax.sql.DataSource;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;

public class DataSourceProvider {
	private static MysqlDataSource dataSource;

	public static DataSource getDataSource() {
		if (dataSource == null) {
			dataSource = new MysqlDataSource();
			dataSource.setServerName("vlvlnl1grfzh34vj.chr7pe7iynqr.eu-west-1.rds.amazonaws.com");
			dataSource.setPort(3306);
			dataSource.setDatabaseName("ohwx147hd9g2vgz4");
			dataSource.setUser("ifw3s4zebh0lo8js");
			dataSource.setPassword("bkc7x46u5gzdykhs");
		}
		return dataSource;
	}
}
