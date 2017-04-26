package projet.cadre.dao;

import javax.sql.DataSource;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;

public class DataSourceProvider {
	private static MysqlDataSource dataSource;

	public static DataSource getDataSource() {
		if (dataSource == null) {
			dataSource = new MysqlDataSource();
			dataSource.setServerName("localhost");
			dataSource.setPort(3306);
			dataSource.setDatabaseName("cadre");
			dataSource.setUser("root");
			dataSource.setPassword("reve18061994");
		}
		return dataSource;
	}
}
