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
			dataSource.setDatabaseName("a1sctmcb2nd4dnpw");
			dataSource.setUser("k0659vklgiv4t5on");
			dataSource.setPassword("nexslmtoj9u5lhxg");
		}
		return dataSource;
	}

}
